<<<<<<< HEAD
<<<<<<< HEAD
import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance
}: TotalBalanceBoxProps) => {
    return (
        <section className="total-balance">
            <div className="total-balance-chart">
                <DoughnutChart accounts={accounts} />
            </div>

            <div className="flex flex-col text-center gap-6">
                <h2 className="header-2">
                    Bank Accounts: {totalBanks}
                </h2>
                <div className="flex flex-col gap-2">
                    <p className="total-balance-label">
                        Total Current Balance
                    </p>

                    <div className="total-balance-amount flex-center gap-2">
                        <AnimatedCounter amount={totalCurrentBalance} />
                    </div>
                </div>
=======
import React from 'react'
=======
import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';
>>>>>>> 21f27ef (add bank chart)

const TotalBalanceBox = ({
    accounts = [], totalBanks, totalCurrentBalance
}: TotalBalanceBoxProps) => {
    return (
        <section className="total-balance">
            <div className="total-balance-chart">
                <DoughnutChart accounts={accounts} />
            </div>

            <div className="flex flex-col text-center gap-6">
                <h2 className="header-2">
                    Bank Accounts: {totalBanks}
                </h2>
<<<<<<< HEAD
>>>>>>> bfbc5cb (second commit start create functionality)
=======
                <div className="flex flex-col gap-2">
                    <p className="total-balance-label">
                        Total Current Balance
                    </p>

                    <div className="total-balance-amount flex-center gap-2">
                        <AnimatedCounter amount={totalCurrentBalance} />
                    </div>
                </div>
>>>>>>> 21f27ef (add bank chart)
            </div>
        </section>
    )
}

export default TotalBalanceBox