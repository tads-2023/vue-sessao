import { ref, computed } from 'vue'
import { usuariosRepository } from '@/api/repositorios/usuarios'
import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session', () => {
  const usuarios = ref([])
  const usuarioLogado = ref({})

  function fetchUsuarios() {
    usuariosRepository.listaUsuarios().then((usuariosResp) => {
        usuarios.value = usuariosResp;
    })
  }

  function fetchUsuarioLogado() {
    usuariosRepository.listaUsuarios().then((usuarioResp) => {
        usuarioLogado.value = usuariosResp;
    })
  }

  return { 
    usuarios,
    usuarioLogado,
    fetchUsuarios, 
    fetchUsuarioLogado 
  }
})
