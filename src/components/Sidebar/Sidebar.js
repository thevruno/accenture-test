import './sidebar.scss';
import apiJSON from '../../services/productService.json'



export default function Sidebar () {

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
                        {
                            apiJSON.map( categoryData => <li><a href="/">{categoryData.category}</a></li> )
                        }
                    </ul>
                </nav>
            </div>

            <div className="sidebar-content__category">
                <h3>
                    Talle
                </h3>
                <nav>
                    <ul>
                        {
                            apiJSON.map( categoryData => <li><a href="/">{categoryData.size}</a></li> )
                        }
                    </ul>
                </nav>
            </div>

            <div className="sidebar-content__category">
                <h3>
                    Color
                </h3>
                <nav>
                    <ul>
                        {
                            apiJSON.map( categoryData => <li><a href="/">{categoryData.color}</a></li> )
                        }
                    </ul>
                </nav>
            </div>
        </aside>
        </>
    );
}