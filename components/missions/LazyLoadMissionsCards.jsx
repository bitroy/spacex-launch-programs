import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import MissionCard from './MissionCard'
import { useSelector, useDispatch } from 'react-redux'
import { fetchMissionsLaunchData } from 'redux/actions/QueryAPI'

const LazyLoadMissionsCards = () => {
    const dispatch = useDispatch()
    const { offset, missions } = useSelector(state => state.missions)
    const [ref, inView, entry] = useInView({
        threshold: 0.5
    })

    useEffect(() => {
        if(offset < 88) {
            dispatch(fetchMissionsLaunchData(process.env.NEXT_PUBLIC_SPACEX_API_URL))
        }
    }, [inView])

    return (
        <>
            {
                missions.map((mission, idx) => <MissionCard key={idx} mission={mission} /> )
            }
            {
                offset < 88 ? <div ref={ref}></div> : null
            }
        </>
    )
}

export default LazyLoadMissionsCards
