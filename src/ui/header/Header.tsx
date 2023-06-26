import React from 'react'
import {LanguageSelector} from '@/ui/language-selector/LanguageSelector';


export const Header = () => {

    return (
        <header className="flex items-center w-full h-16 text-light-100 bg-bgColor border-b-[1px] border-b-bgLogBorder">
            <div className="px-[60px] flex justify-between w-full">
                <span className="cursor-pointer">InctagramSuperAdmin</span>
                <LanguageSelector/>
            </div>
        </header>
    )
}
