import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechList from './components/TechList';
import StackManager from './components/StackManager';
import type { Technology } from './types/tech';

export default function App() {
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  const handleAddStack = (tech: Technology) => {
    if (selectedStack.some((item) => item.id === tech.id)) {
      toast.warn(`${tech.name} is already in your stack!`, { position: 'bottom-right' });
      return;
    }
    setSelectedStack([...selectedStack, tech]);
    toast.success(`Successfully added ${tech.name} to your stack!`, { position: 'bottom-right' });
  };

  const handleRemoveStack = (id: string, name: string) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
    toast.info(`Removed ${name} from your stack.`, { position: 'bottom-right' });
  };

  const handleClearAll = () => {
    setSelectedStack([]);
    toast.error('Cleared all technologies from your stack.', { position: 'bottom-right' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <TechList onAddStack={handleAddStack} selectedStack={selectedStack} />
          </div>
          <div className="lg:col-span-1 pt-16">
            <StackManager
              selectedStack={selectedStack}
              onRemoveStack={handleRemoveStack}
              onClearAll={handleClearAll}
            />
          </div>
        </div>
      </main>
      <ToastContainer autoClose={2000} />
    </div>
  );
}