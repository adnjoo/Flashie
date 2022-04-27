import pandas as pd

df = pd.read_csv('a.csv')

# print(df.to_string())
x = (df.iloc[:, 0])
print(x[1])
