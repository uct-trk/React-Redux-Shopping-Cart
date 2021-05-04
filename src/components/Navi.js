
import React from 'react'
import { Link } from 'react-router-dom'

const Navi = () => {
    return (

      <nav class="navbar navbar-expand-lg navbar-light bg-warning mb-5">
      <div class="container-fluid">
        <Link to="/"><a class="navbar-brand text-white" >UCT-SHOP</a></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Sepet</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    )
}

export default Navi
