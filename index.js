# Read the newly uploaded obfuscated JavaScript file
uploaded_file_path = "/mnt/data/encrypted_code.js"
obfuscated_code = Path(uploaded_file_path).read_text()

# Display a snippet (first 30 lines) for initial analysis
obfuscated_lines = obfuscated_code.splitlines()[:30]
"\n".join(obfuscated_lines)
