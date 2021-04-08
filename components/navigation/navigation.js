import React from 'react';
import '../../scss/navigation.css'

function navigation(props) {
    let isOpen = false
    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="p-2">
                    <div className="nav-item  dropdown">
                        <a class="nav-link" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Navigation 1</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#1">Action 1</a>
                            <a class="dropdown-item" href="#2">Action 2</a>
                            <a class="dropdown-item" href="#3">Action 3</a>
                        </div>
                    </div>
                </div>
                <div className="p-2">
                <div className="nav-item  dropdown">
                        <a class="nav-link" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Navigation 2</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#1">Action 1</a>
                            <a class="dropdown-item" href="#2">Action 2</a>
                            <a class="dropdown-item" href="#3">Action 3</a>
                        </div>
                    </div>
                </div>
                <div className="p-2">
                <div className="nav-item  dropdown">
                        <a class="nav-link" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Navigation 3</a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#1">Action 1</a>
                            <a class="dropdown-item" href="#2">Action 2</a>
                            <a class="dropdown-item" href="#3">Action 3</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default navigation;