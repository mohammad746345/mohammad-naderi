import React from "react";
import axios from "axios";
import {API_Refresh_Token, API_Verify_Token} from "../../constants";

function Authentication() {
    axios({
      method: 'post',
      url: `${API_Verify_Token}`,
      data:{token:localStorage.getItem('access')},
    }).then(() => {
        window.loginState = true
      }
    ).catch(() => {
        axios({
            method: 'post',
            url: `${API_Refresh_Token}`,
            data: {refresh:localStorage.getItem('refresh')}
        }).then(resp => {
            localStorage.setItem('access', resp['data']['access'])
            window.loginState = true
        }).catch(() => {
            window.loginState = false
        })
    })
}

export default Authentication;