import React, {useEffect, useState} from 'react'
import './sidebar.scss';



export default function Sidebar ({category}) {


    return (
        <>
        <aside className='sidebar-content'>
            <div className="sidebar-content__title">
                <h1>Zapatillas</h1>
                <hr />
                <h2>Filtrar</h2>
            </div>
            
            <div className="sidebar-content__category">
                <h3>
                    Categoría
                </h3>
                <nav>
                    <ul>
                        <li><a href="#">Zapatillas</a></li>
                        <li><a href="#">Zapatos</a></li>
                        <li><a href="#">Botas</a></li>
                    </ul>
                </nav>
            </div>

            <div className="sidebar-content__category">
                <h3>
                    Talle
                </h3>
                <nav>
                    <ul>
                        <li><a href="#">36</a></li>
                        <li><a href="#">40</a></li>
                        <li><a href="#">43</a></li>
                    </ul>
                </nav>
            </div>

            <div className="sidebar-content__category">
                <h3>
                    Color
                </h3>
                <nav>
                    <ul>
                        <li><a href="#">Amarillo</a></li>
                        <li><a href="#">Negro</a></li>
                        <li><a href="#">Blanco</a></li>
                    </ul>
                </nav>
            </div>
        </aside>
        </>
    );
}