import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constans'
import { Auth } from '@/components/screens/auth/Auth'

export const metadata: Metadata = {
    title: 'Registration',
    ...NO_INDEX_PAGE
}

export default function RegistrationPage() {
    return <Auth type='Registration'/>
}
