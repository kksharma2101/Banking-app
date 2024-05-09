'use client'

import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
    return (
        <div className='w-full'>
            <CountUp end={amount} start={amount - 100} duration={4.75} decimals={2} prefix='$' />
        </div>
    )
}

export default AnimatedCounter