import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Generar un dataset de ejemplo con numpy
np.random.seed(42)  # Para reproducibilidad
num_samples = 1000

edades = np.random.randint(18, 70, size=num_samples)
alturas = np.random.normal(loc=165, scale=10, size=num_samples)
pesos = np.random.normal(loc=70, scale=15, size=num_samples)
generos = np.random.choice(['M', 'F'], size=num_samples)

data = {
    'Edad': edades,
    'Altura': alturas,
    'Peso': pesos,
    'Género': generos
}

df = pd.DataFrame(data)

# Histograma de alturas
plt.figure(figsize=(10, 6))
plt.hist(df['Altura'], bins=30, edgecolor='black', alpha=0.7)
plt.title('Histograma de Alturas')
plt.xlabel('Altura (cm)')
plt.ylabel('Frecuencia')
plt.grid(True)
plt.show()

# Diagrama de dispersión de pesos vs edades
plt.figure(figsize=(10, 6))
plt.scatter(df['Edad'], df['Peso'], c='blue', alpha=0.5)
plt.title('Diagrama de Dispersión de Pesos vs Edades')
plt.xlabel('Edad')
plt.ylabel('Peso (kg)')
plt.grid(True)
plt.show()

# Gráfica de barras de promedios de altura por género
promedios_altura_por_genero = df.groupby('Género')['Altura'].mean()

plt.figure(figsize=(10, 6))
promedios_altura_por_genero.plot(kind='bar', color=['blue', 'orange'], edgecolor='black', alpha=0.7)
plt.title('Promedio de Altura por Género')
plt.xlabel('Género')
plt.ylabel('Altura Promedio (cm)')
plt.xticks(rotation=0)
plt.grid(True, axis='y')
plt.show()
