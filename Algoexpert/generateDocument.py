def generateDocument(characters, document):
    # Write your code here.
	freq = {}
	for i in characters:
		if i in freq:
			freq[i] += 1
		else: 
			freq[i] = 1
	for i in document:
		if i in freq:
			if freq[i] == 0:
				return False
			freq[i] -= 1
		else:
			return False
	return True
