import { Injectable } from '@nestjs/common';

import { Usuario } from './database/entity/usuario.entity';
import { UsuarioRepository } from './database/repository/usuario.repository';

@Injectable()
export class AppService {
  constructor(
    private readonly usuarioRepository: UsuarioRepository
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async cadastrar(usuario: Usuario): Promise<Usuario> {
    return await this.usuarioRepository.cadastrar(usuario);
  }

  async buscar(): Promise<Usuario[]> {
    return await this.usuarioRepository.buscar();
  }

  async deletar(id: number): Promise<void> {
    return await this.usuarioRepository.deletar(id);
  }
}
