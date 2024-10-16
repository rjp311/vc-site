import client from '../../../tina/__generated__/client';

import Navigation from './navigation';

export default async function Header() {
    const response = await client.queries.global({ relativePath: 'website.json' })
    const nav = response?.data?.global?.header?.header_navigation
    
    return (
        <Navigation props={nav}/>
    );
}