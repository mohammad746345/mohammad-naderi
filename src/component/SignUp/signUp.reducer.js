const SignUpReducer = (state, action) => {
    switch (action.type){
        case 'LAWYER':
            return{
                type: '1',
                user: 'lawyer'
            }
        case 'EXPERT':
            return{
                type: '2',
                user: 'expert'
            }
        case 'NORMAL':
            return{
                type: '0',
                user: 'normal'
            }
    }
}

export default SignUpReducer;