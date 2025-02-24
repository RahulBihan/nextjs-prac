import Card from '@/components/card';
import React from 'react';

import Link from 'next/link';

const Notifications: React.FC = () => {
    return (
        <Card>
            <h1>Notifications</h1>
            {/* Add your notification components or logic here */}
            <Link href="/complex-dashboard/archived">Archived</Link>
        </Card>
    );
};

export default Notifications;