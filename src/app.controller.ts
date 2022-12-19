import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Usuario } from './database/entity/usuario.entity';

@Controller('usuarios')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async buscar(): Promise<Usuario[]> {
    return this.appService.buscar();
  }

  @Post()
  async cadastrar(@Body() usuario: Usuario): Promise<Usuario> {
    return await this.appService.cadastrar(usuario);
  }

  @Delete('/:id')
  async deletar(@Param() { id }: { id: number }): Promise<{ message: string }> {
    await this.appService.deletar(id);
    return { message: 'Usuário deletado com sucesso' };
  }
}
