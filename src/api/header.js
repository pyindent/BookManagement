import TokenService from './token'

const header = () => {
  return {'Authorization':  `Bearer ${TokenService.getLocalAccessToken()}`}
}

export default header
