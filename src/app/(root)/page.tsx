import HeaderBox from '@/components/HeaderBox'
<<<<<<< HEAD
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import React from 'react'

const Home = async () => {
    const loggedIn = await getLoggedInUser();
=======
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: "Kamal" }
>>>>>>> bfbc5cb (second commit start create functionality)
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
<<<<<<< HEAD
                        user={loggedIn?.name || "Guest"}
=======
                        user={loggedIn.firstName || "Guest"}
>>>>>>> bfbc5cb (second commit start create functionality)
                        subtext="Access and manage your account and transactions efficiently"
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={2510.32}
                    />
                </header>
            </div>
<<<<<<< HEAD
            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 143.43 }, { currentBalance: 432.21 }]}
            />
=======
>>>>>>> bfbc5cb (second commit start create functionality)
        </section>
    )
}

export default Home