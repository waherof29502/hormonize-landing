import { cn } from '@/src/lib/utils';
import * as React from 'react';
import { ChevronDown } from 'lucide-react';
export type SelectProps = React.HTMLProps<HTMLSelectElement>;

const CustomSelect = React.forwardRef<HTMLSelectElement, SelectProps>(({ className, ...props }, ref) => {
    return (
        <>
            <div className='relative'>
                <select
                    className={cn(
                        'h-12 w-full appearance-none truncate bg-[#F4F4F4] rounded round-sm text-sm py-2 px-4 ring-offset-background focus:outline-none focus:ring-2 focus:ring-blue-800 disabled:cursor-not-allowed disabled:opacity-50',
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                <ChevronDown className='absolute top-3 right-3 opacity-50' />
            </div>
        </>
    );
});
CustomSelect.displayName = 'Select';

export { CustomSelect };