import Layout from '@/shared/ui/layout/Layout';
import MonthSelector from '@/features/expense/ui/MonthSelector';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import Logo from '@/shared/ui/icons/Logo';

const ExpensesPage: React.FC = () => {
  return (
    <Layout>
      <header className='flex flex-row items-center px-5 py-4'>
        <Logo />
        <Button variant='ghost' className='ml-auto'>
          <Settings />
        </Button>
      </header>
      <main>
        <div className='px-5 py-4'>
          <h1 className='text-[22px] mb-4'>기록</h1>
          <MonthSelector />
        </div>
      </main>
    </Layout>
  );
};

export default ExpensesPage;
