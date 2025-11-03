import { useState } from 'react'

export function useForm(initialFields, cb) {
    const [fields, setFields] = useState(initialFields)
    
    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        
        switch (target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break
            case 'checkbox':
                value = target.checked
                break
            default:
                break
        }
        
        setFields(prevFields => ({ ...prevFields, [field]: value }))
    }
    
    function handleSubmit(ev) {
        ev.preventDefault()
        cb(fields)
    }
    
    return [fields, handleChange, handleSubmit, setFields]
}