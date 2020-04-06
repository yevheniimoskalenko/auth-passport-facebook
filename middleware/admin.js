export default function ({ $auth, redirect }) {
    if ($auth.$state.user.admin === 0) {
        redirect('/profile')
    }
}
