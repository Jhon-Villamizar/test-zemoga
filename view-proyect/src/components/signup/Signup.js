import React from 'react';

export default function SignUp(props) {

  const {handlerLogin} = props;

  return (
    <div class="container">
    <div class="d-flex justify-content-center h-100">
      <div class="card card--up">
        <div class="card-header">
          <h3>Sign In</h3>
          <div class="d-flex justify-content-end social_icon">
            <span><i class="fab fa-facebook-square"></i></span>
            <span><i class="fab fa-google-plus-square"></i></span>
            <span><i class="fab fa-twitter-square"></i></span>
          </div>
        </div>
        <div class="card-body">
          <form>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-user"></i></span>
              </div>
              <input type="text" class="form-control" placeholder="Username"/>
              
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>
              <input type="password" class="form-control" placeholder="Password"/>
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-calendar-alt"></i></span>
              </div>
              <input type="number" class="form-control form-control-age" placeholder="Age"/>
              <div class="input-group-prepend">
                <span class="input-group-text input-group-text-status"><i class="fas fa-users"></i></span>
              </div>
              <input type="text" class="form-control" placeholder="Marital Status"/>
            </div>
            <div class="input-group form-group">
              
            </div>
            <div class="form-group">
              <input type="submit" value="Login" class="btn float-right login_btn"/>
            </div>
          </form>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-center links">
            Already have an account?<a onClick={handlerLogin}>Sign In</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}