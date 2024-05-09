'use client'

import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
    return (
        <div className='w-full'>
            <CountUp end={amount} duration={1.7} decimals={2} prefix='$' />
        </div>
    )
}

export default AnimatedCounter