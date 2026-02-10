import { useState, useEffect } from 'react';
import { Plus, FileText, Loader2, Wifi, WifiOff, CheckCircle } from 'lucide-react';
import { Header } from './components/Header';
import { PrescriptionForm } from './components/PrescriptionForm';
import { PrescriptionList } from './components/PrescriptionList';
import { SettingsModal } from './components/SettingsModal';
import { useApp } from './hooks/useApp';
import { translations } from './i18n';

export function App() {
  const {
    data,
    isLoading,
    darkMode,
    toggleDarkMode,
    addPrescription,
    deletePrescription,
    addMedication,
    deleteMedication,
    addCategory,
    deleteCategory,
    updateSettings,
    setLanguage,
  } = useApp();

  const [showNewPrescription, setShowNewPrescription] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOfflineNotice, setShowOfflineNotice] = useState(false);
  const [swRegistered, setSwRegistered] = useState(false);

  const t = translations[data.settings.language];
  const isRTL = data.settings.language === 'ar' || data.settings.language === 'ku';

  // PWA install prompt
  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  // Online/Offline status
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowOfflineNotice(false);
    };
    const handleOffline = () => {
      setIsOnline(false);
      setShowOfflineNotice(true);
      setTimeout(() => setShowOfflineNotice(false), 5000);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Register service worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
          setSwRegistered(true);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New version available
                  console.log('New version available');
                }
              });
            }
          });
        })
        .catch((err) => {
          console.error('Service Worker registration failed:', err);
        });
    }
  }, []);

  // Pre-cache fonts when online
  useEffect(() => {
    if (isOnline && swRegistered) {
      // Pre-fetch fonts for offline use
      const fontUrls = [
        'https://raw.githubusercontent.com/google/fonts/main/ofl/tajawal/Tajawal-Regular.ttf',
        'https://raw.githubusercontent.com/google/fonts/main/ofl/tajawal/Tajawal-Bold.ttf',
      ];
      
      fontUrls.forEach(url => {
        fetch(url, { mode: 'cors' })
          .then(response => {
            if (response.ok) {
              console.log('Font pre-cached:', url);
            }
          })
          .catch(() => {});
      });
    }
  }, [isOnline, swRegistered]);

  const handleInstall = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    const result = await installPrompt.userChoice;
    if (result.outcome === 'accepted') {
      setInstallPrompt(null);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="text-center">
          <Loader2 size={48} className="animate-spin text-indigo-600 mx-auto mb-4" />
          <p className="text-gray-500 font-bold">{isRTL ? 'جاري التحميل...' : 'Loading...'}</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 ${isRTL ? 'font-cairo' : 'font-inter'}`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Header
        language={data.settings.language}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenSettings={() => setShowSettings(true)}
        installPrompt={installPrompt}
        onInstall={handleInstall}
      />

      {/* Offline Notice */}
      {showOfflineNotice && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-amber-500 text-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-in">
          <WifiOff size={20} />
          <span className="font-bold">{isRTL ? 'أنت غير متصل بالإنترنت - التطبيق يعمل بدون إنترنت' : 'You are offline - App works offline'}</span>
        </div>
      )}

      {/* Online/Offline indicator */}
      <div className={`fixed bottom-4 ${isRTL ? 'left-4' : 'right-4'} z-40`}>
        <div className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-bold shadow-lg ${
          isOnline 
            ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300' 
            : 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300'
        }`}>
          {isOnline ? <Wifi size={14} /> : <WifiOff size={14} />}
          {isOnline ? (isRTL ? 'متصل' : 'Online') : (isRTL ? 'غير متصل' : 'Offline')}
          {swRegistered && !isOnline && (
            <CheckCircle size={14} className="text-green-500" />
          )}
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 pb-24">
        {/* Title Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
            <FileText className="text-indigo-600" />
            {t.prescriptionHistory}
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            {data.prescriptions.length} {isRTL ? 'وصفة' : 'prescriptions'}
          </p>
        </div>

        <PrescriptionList
          language={data.settings.language}
          prescriptions={data.prescriptions}
          appData={data}
          onDelete={deletePrescription}
        />
      </main>

      {/* FAB */}
      <button
        onClick={() => setShowNewPrescription(true)}
        className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-2xl shadow-indigo-500/40 hover:shadow-indigo-500/60 transition-all duration-300 flex items-center gap-3 font-bold text-lg hover:-translate-y-1 active:scale-95"
      >
        <Plus size={24} />
        {t.newPrescription}
      </button>

      {/* Modals */}
      {showNewPrescription && (
        <PrescriptionForm
          language={data.settings.language}
          medications={data.medications}
          categories={data.medicationCategories}
          onSave={async (rx) => {
            await addPrescription(rx);
            setShowNewPrescription(false);
          }}
          onCancel={() => setShowNewPrescription(false)}
        />
      )}

      <SettingsModal
        show={showSettings}
        onClose={() => setShowSettings(false)}
        language={data.settings.language}
        settings={data.settings}
        prescriptions={data.prescriptions}
        medications={data.medications}
        categories={data.medicationCategories}
        onUpdateSettings={updateSettings}
        onAddMedication={addMedication}
        onDeleteMedication={deleteMedication}
        onAddCategory={addCategory}
        onDeleteCategory={deleteCategory}
        onSetLanguage={setLanguage}
        onRestorePrescriptions={async (prescriptions) => {
          // Add restored prescriptions
          for (const rx of prescriptions) {
            await addPrescription(rx);
          }
        }}
        onClearPrescriptions={async () => {
          // Clear all prescriptions
          for (const rx of data.prescriptions) {
            await deletePrescription(rx.id);
          }
        }}
      />
    </div>
  );
}
