import React from 'react'
import { Outlet } from 'react-router-dom'

const Container = () => {
    return (
        <section>
            <Outlet/>
        </section>
    )
}

export default Container
