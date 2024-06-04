import { apiService } from "../api.service";

export const usuariosRepository = {
    listaUsuarios: () => {
        return apiService.get("/usuarios")
    },

    pegaUserLogado: () => {
        return apiService.get("/usuarios/me")
    },

    detalhesDeUmUsuario: (id) => {
        return apiService.get(`/usuarios/${id}`)
    },

    criarUsuario: (dados) => {
        return apiService.post("/usuarios", dados)
    }
}
