import type { Metadata } from 'next'

import { Auth } from '@/components/screens/auth/Auth'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
    title: 'Registration',
    ...NO_INDEX_PAGE
}

export default function RegistrationPage() {
    return <Auth type='Registration'/>
}
