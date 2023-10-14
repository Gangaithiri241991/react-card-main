import React from 'react';

const CardNew=(props)=> {
  return (
   
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.title}</h5>
            <h6 class="card-price text-center">{props.price}<span class="period">{props.des}</span></h6>
            <hr/>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.list}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.list1}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.list2}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.list3}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.list4}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.list5}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.list6}
              </li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.list7}</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>

  );
}

export default CardNew;