interface Aviso {
  id: number;
  titulo: string;
  categoria?: { id: number; nombre: string };
  creado: string;
}

const avisos: Aviso[] = [
  { id: 1, titulo: 'Cambio de horario en barandilla', categoria: { id: 1, nombre: 'Aviso' }, creado: '2026-09-10T10:00:00-06:00' },
  { id: 2, titulo: 'Curso de primeros auxilios', creado: '2026-09-09T09:00:00-06:00' }
];

function vencimiento(fecha: string, dias: number): Date {
  const dia = new Date(fecha);
  dia.setDate(dia.getDate() + dias);
  return dia;
}

function titulares(lista: Aviso[]): string[] {
  return lista.map(aviso => aviso.titulo.toUpperCase());
}

function categorias(lista: Aviso[]): string[] {
  return lista.map(aviso => aviso.categoria?.nombre ?? 'Sin categoría');
}


console.log('Vence:', vencimiento(avisos[0].creado, 3).toISOString().slice(0, 10));
console.log('Titulares:', titulares(avisos));
console.log('Categorias:', categorias(avisos));