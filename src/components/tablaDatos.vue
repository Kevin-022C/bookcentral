
<template>
	<div>
		<h3>Personas encontradas</h3>
		<table v-if="personas && personas.length" border="1" cellspacing="0" cellpadding="6">
			<thead>
				<tr>
					<th>Foto</th>
					<th>Título</th>
					<th>Nombre</th>
					<th>Apellido</th>
					<th>Edad</th>
					<th>Teléfono</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(p, idx) in personas" :key="idx">
					<td><img :src="p.foto" alt="foto" width="60"/></td>
					<td>{{ p.titulo }}</td>
					<td>{{ p.nombre }}</td>
					<td>{{ p.apellido }}</td>
					<td>{{ p.edad }}</td>
					<td>{{ p.telefono }}</td>
					<td>{{ p.email }}</td>
				</tr>
			</tbody>
		</table>
		<p v-else>No hay personas aún. Presiona "Buscar" en el formulario.</p>
	</div>
</template>

<script>
export default {
	name: 'TablaDatos',
	props: {
		personas: {
			type: Array,
			default: () => []
		}
	}
}
</script>

<style scoped>
table { width: 100%; border-collapse: collapse; }
th { background: #f3f3f3; }
img { border-radius: 4px; }
</style>