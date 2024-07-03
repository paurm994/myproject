import time
import sys
import numpy as np

# Función para medir el tiempo de ejecución de una operación
def measure_time(operation):
    start_time = time.time()
    operation()
    end_time = time.time()
    return end_time - start_time

# Función para medir el uso de memoria de un objeto
def measure_memory(obj):
    return sys.getsizeof(obj)

# Operaciones con listas
def list_operations():
    # Crear una lista con 1 millón de elementos
    lst = [i for i in range(1_000_000)]
    
    # Medir el uso de memoria de la lista
    memory_list = measure_memory(lst)
    
    # Sumar los elementos de la lista
    time_sum_list = measure_time(lambda: sum(lst))
    
    # Multiplicar cada elemento por una constante
    time_multiply_list = measure_time(lambda: [x * 2 for x in lst])
    
    return memory_list, time_sum_list, time_multiply_list

# Operaciones con np.array
def numpy_operations():
    # Crear un np.array con 1 millón de elementos
    arr = np.arange(1_000_000)
    
    # Medir el uso de memoria del np.array
    memory_array = measure_memory(arr)
    
    # Sumar los elementos del np.array
    time_sum_array = measure_time(lambda: np.sum(arr))
    
    # Multiplicar cada elemento por una constante
    time_multiply_array = measure_time(lambda: arr * 2)
    
    return memory_array, time_sum_array, time_multiply_array

# Ejecutar operaciones con listas y np.array
memory_list, time_sum_list, time_multiply_list = list_operations()
memory_array, time_sum_array, time_multiply_array = numpy_operations()

# Imprimir los resultados
print("Resultados para Listas:")
print(f"Uso de memoria: {memory_list} bytes")
print(f"Tiempo de suma: {time_sum_list:.6f} segundos")
print(f"Tiempo de multiplicación: {time_multiply_list:.6f} segundos")

print("\nResultados para np.arrays:")
print(f"Uso de memoria: {memory_array} bytes")
print(f"Tiempo de suma: {time_sum_array:.6f} segundos")
print(f"Tiempo de multiplicación: {time_multiply_array:.6f} segundos")
