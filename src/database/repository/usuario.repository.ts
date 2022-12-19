import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../entity/usuario.entity';
import { Repository } from 'typeorm';

export class UsuarioRepository {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async cadastrar(usuario: Usuario): Promise<Usuario> {
    return await this.usuarioRepository.save(usuario);
  }

  async buscar(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  async deletar(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
