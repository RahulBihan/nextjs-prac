import Card from '@/components/card';
import React from 'react';

import Link from 'next/link';

const ArchivedNotifications: React.FC = () => {
    return (
        <Card>
            <h1>ArchivedNotifications Notifications</h1>
            {/* Add your notification components or logic here */}
            <Link href="/complex-dashboard">Default</Link>
        </Card>
    );
};

export default ArchivedNotifications;