import { useEffect, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { api } from '@/lib/axios'

type Prompts = {
    id: string
    title: string
    template: string
}

type Props = {
    onPromptSelect: (template: string) => void
}

const PromptSelect = (props: Props) => {
    const [prompts, setPrompts] = useState<Prompts[] | null>(null)

    useEffect(() => {
        api.get('/prompts').then(response => {
            setPrompts(response.data)
        })
    }, [])

    const handlePromptSelect = (promptId: string) => {
        const selectedPrompt = prompts?.find(prompt => prompt.id === promptId)

        if(!selectedPrompt) return

        props.onPromptSelect(selectedPrompt.template)
    }


  return (
    <Select onValueChange={handlePromptSelect}>
        <SelectTrigger>
            <SelectValue placeholder='Selecione um prompt...' />
        </SelectTrigger>
        <SelectContent>
            {prompts?.map(prompt => (
                <SelectItem key={prompt.id} value={prompt.id}>
                    {prompt.title}
                </SelectItem>
            ))}
        </SelectContent>
    </Select>
  )
}

export default PromptSelect