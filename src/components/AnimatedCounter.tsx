'use client'

import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
    return (
        <div className='w-full'>
<<<<<<< HEAD
            <CountUp end={amount} duration={1.7} decimals={2} prefix='$' />
=======
            <CountUp end={amount} start={amount - 100} duration={4.75} decimals={2} prefix='$' />
>>>>>>> 21f27ef (add bank chart)
        </div>
    )
}

export default AnimatedCounter