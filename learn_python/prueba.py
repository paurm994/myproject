import pandas as pd
import matplotlib.pyplot as plt

# Crear un DataFrame de ejemplo
data = {
    'Edad': [23, 25, 31, 22, 33, 45, 36, 27, 19, 50],
    'Altura': [170, 165, 180, 175, 160, 155, 168, 172, 178, 165],
    'Peso': [70, 65, 80, 75, 60, 55, 68, 72, 78, 65],
    'Género': ['M', 'F', 'M', 'F', 'F', 'F', 'M', 'M', 'M', 'F']
}

df = pd.DataFrame(data)

# Histograma de alturas
plt.figure(figsize=(10, 6))
plt.hist(df['Altura'], bins=10, edgecolor='black')
plt.title('Histograma de Alturas')
plt.xlabel('Altura (cm)')
plt.ylabel('Frecuencia')
plt.grid(True)
plt.show()
