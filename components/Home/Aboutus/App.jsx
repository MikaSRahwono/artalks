import { useInView } from 'react-intersection-observer'

import styles from './Aboutus.module.css'

export const App = () => {
    const {ref: target_1, inView: isVisible_1} = useInView()
    const {ref: target_2, inView: isVisible_2} = useInView()

    return(
        <div className="p-44">
            <div className=" font-bold text-pink-100 pt-auto pl-auto">
                <div className={`${styles.subjudul_1} ${ isVisible_1 ? styles.lineUp : styles.fadeOut} `}>
                    <h1 className="mb-10 text-7xl tracking-wide">
                        Coming Soon
                    </h1>
                </div>
                <div ref={target_1}  ></div>
                <div className='h-28'></div>
                <div ref={target_2}  ></div>
            </div>
        </div>
    )
}