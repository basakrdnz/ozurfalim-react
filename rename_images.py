import os
import unicodedata

path = "/Users/baso/Documents/GitHub/ozurfalim-react/src/assets/images"
files = os.listdir(path)

def remove_accents(input_str):
    nfkd_form = unicodedata.normalize('NFKD', input_str)
    return "".join([c for c in nfkd_form if not unicodedata.combining(c)])

for filename in files:
    if filename == ".DS_Store":
        continue
    
    # Special case for 'ı' which becomes 'i' and then 'i' in NFC
    # But in Turkish 'ı' is dotless i.
    temp_name = filename.replace('ı', 'i').replace('İ', 'I')
    new_name = remove_accents(temp_name)
    
    # Ensure only ASCII and common chars
    new_name = "".join(c for c in new_name if ord(c) < 128)

    if new_name != filename:
        old_path = os.path.join(path, filename)
        new_path = os.path.join(path, new_name)
        print(f"Renaming {filename} to {new_name}")
        try:
            if os.path.exists(new_path):
                 print(f"File {new_name} already exists, skipping...")
            else:
                os.rename(old_path, new_path)
        except Exception as e:
            print(f"Error renaming {filename}: {e}")
