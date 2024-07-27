import React from 'react'

export default function Dropdown() {
  return (
    <div>
<div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Select The course
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">HTML</button></li>
    <li><button class="dropdown-item" type="button">CSS</button></li>
    <li><button class="dropdown-item" type="button">JavaScript</button></li>
  </ul>
</div>
    </div>
  )
}
