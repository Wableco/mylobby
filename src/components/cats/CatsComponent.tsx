import { useEffect, useRef, useState } from 'react'
import salem from '/Salem.png'
import bubba from '/Buba.png'
import './cats.css'

const CatsComponent = () => {


    const listaCoordenadas = useRef<string[]>([
        'M179 20C162 188 78.5 188 46.5 153',
        'M179 19C179 194 101.5 215 50 169.5',
        'M179 19C210 187 134.5 227 62 189',
        'M179 19C240.5 164.5 179 216 98 191',
        'M179 19C270.5 153 202.5 214.5 130 199',
        'M179 19C270.5 153 251.5 203.5 155 203.5',
        'M179 19C250 129.5 274.5 188.5 202.5 219',
        'M179 19C223 141.5 282 172 234.5 225',
        'M179 19C208 157 278.5 149.5 261 216',
        'M179 19C196.5 176.5 267 134.5 286 205',
        'M179 19C181.5 167.5 246 146.5 301 192',
        'M179 19C179 150.5 210 143 299 168',
        'M179 19C179 151 221.5 166.5 297.5 166.5',
        'M179 19C162.5 146 200.5 170.5 276.5 170.5',
        'M179 19C162.5 146 200.5 170.5 276.5 170.5',
        'M179 19C143.5 137 189 194 265 163.5',
        'M179 19C143.5 137 168 202.5 244 172',
        'M179 19C130 128.5 156.5 206.5 232.5 176',
        'M179 19C130 128.5 139 203.5 209 179.5',
        'M179 19C122.5 124 116 203.5 195 183.5',
        'M179 19C104.5 115.5 103.5 184.5 179 184.5',
        'M179 19C104.5 115.5 81.5 162.5 155.5 176',
        'M179 19C131.5 75.5 66.5 137 131.5 170',
        'M179 19C137.5 91.5 75 108.5 110 154',
        'M179 19C165.5 108.5 100.5 100 88.5 152',
        'M179 19C174 126.5 104.5 102 70.5 144.5',
        'M179 19C174 126.5 121.5 121 70.5 144.5',
        'M179 19C174 126.5 123 151.5 66 151.5',
    ])
    const [numBubba, setnumBubba] = useState<number>(0)
    const [coorBubba, setcoorBubba] = useState<string>(listaCoordenadas.current[numBubba])
    const [numSalem, setnumSalem] = useState<number>(5)
    const [coorSalem, setcoorSalem] = useState<string>(listaCoordenadas.current[numSalem])
    //Bubba
    useEffect(() => {
        const interval = setInterval(() => {
            setnumBubba((prevNum) => (prevNum + 1) % listaCoordenadas.current.length)
        }, 50);

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        setcoorBubba(listaCoordenadas.current[numBubba])
    }, [numBubba])


    //Salem
    useEffect(() => {
        const interval = setInterval(() => {
            setnumSalem((prevNum) => (prevNum + 1) % listaCoordenadas.current.length)
        }, 70);

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        setcoorSalem(listaCoordenadas.current[numSalem])
    }, [numSalem])

    return (
        <div className="cats">
            <div className="salem">
                <img src={salem} alt="Salem.png" width='110'></img>
                <svg id="raboSalem" width="200" height="328" viewBox="0 0 358 328" fill="none" >
                    <path d={coorSalem} id="rabomeugatoSalem" stroke="black" strokeWidth="25" strokeLinecap="round" />
                </svg>
            </div>
            <div className="buba">
                <img src={bubba} alt="buba.png" width="110" />
                <svg id="raboBubba" width="200" height="328" viewBox="0 0 358 328" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d={coorBubba} id="rabomeugatoBubba" stroke="rgb(219,219,219)" strokeWidth="30" strokeLinecap="round" />
                </svg>
            </div>
        </div>
    )
}

export default CatsComponent
