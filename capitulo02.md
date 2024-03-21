# Capítulo 02: Git Branch

Claro, el comando `git branch` en Git se utiliza para listar, crear y eliminar ramas en un repositorio. Aquí tienes una breve explicación de cómo se usa:

Listar ramas: Al ejecutar git branch sin argumentos, se muestra una lista de todas las ramas en el repositorio. La rama actual se resalta con un asterisco (*).

Crear una rama: Para crear una nueva rama, simplemente especifica el nombre de la nueva rama después del comando `git branch`. Por ejemplo, `git branch nueva_rama` creará una nueva rama llamada "nueva_rama" basada en la rama actual.

Eliminar una rama: Para eliminar una rama, utiliza el comando `git branch -d` seguido del nombre de la rama que deseas eliminar. Por ejemplo, `git branch -d rama_a_eliminar`.

Es importante destacar que al eliminar una rama, Git no elimina los commits que contiene. Si los commits en la rama que deseas eliminar no están fusionados en otra parte del repositorio, Git te advertirá antes de eliminar la rama para evitar la pérdida de datos. Si deseas forzar la eliminación de una rama, incluso si hay commits no fusionados, puedes usar la opción `-D` en lugar de `-d`.