def firstNonRepeatingCharacter(string):
    # Write your code here.
	freq = {}
	for i in string:
		if i in freq:
			freq[i] += 1
		else: 
			freq[i] = 1
	for i, ch in enumerate(string): 
		if freq[ch] == 1: 
			return i
	return -1