'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { Search } from 'lucide-react'


export function InputSearch() {
  const [inputValue, setInputValue] = useState<string>('')

  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

  }

  const delayedQuery = useDebouncedCallback((query: string) => {
    router.push(`/search?q=${query}`);
  }, 200);



  useEffect(() => {
    delayedQuery(inputValue);
  }, [delayedQuery, inputValue])

  return (
    <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
    
       <Search className="w-5 h-5 text-zinc-500" /> 

      <input
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
        placeholder="Search Products"
        defaultValue={query ?? ''}
        onChange={handleChange}
        value={inputValue}
        name="q"
      />
    </form>
  )
}
