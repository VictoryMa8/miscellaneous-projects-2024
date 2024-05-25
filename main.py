import os

# file path for storing user credentials
file_path = r'C:\Users\Victory\Desktop\Summer-2024\user_credentials.txt'

# first page of the app
def display_homepage():
    while True:
        print("Welcome to the App")
        print("1. Create New Account")
        print("2. Log In")
        print("3. Exit")
        choice = input("Please enter your choice (1, 2, or 3): ")

        if choice == '1':
            create_new_account()
        elif choice == '2':
            log_in()
        elif choice == '3':
            print("Exiting the app. Goodbye.")
            break
        else:
            print("Invalid choice. Please try again.")

def create_new_account():
    username = input("Enter a new username: ")
    password = input("Enter a new password: ")

    # open the file in append mode
    with open(file_path, 'a') as file:
        # write the header if file is empty
        if os.path.getsize(file_path) == 0:
            file.write("Username, Password\n")
        # write new username and password to the file
        file.write(f"{username}, {password}\n")
    
    print("Account created successfully!")

def log_in():
    username = input("Enter your username: ")
    password = input("Enter your password: ")

    if validate_credentials(username, password):
        print("Login successful.")
        user_home(username)
    else:
        print("Invalid username or password. Please try again.")

def validate_credentials(username, password):
    # open the file in read mode
    with open(file_path, 'r') as file:
        # skip the header line
        next(file)
        # search for username and password
        for line in file:
            stored_username, stored_password = line.strip().split(', ')
            if stored_username == username and stored_password == password:
                return True
    return False

def user_home(username):
    while True:
        print(f"\nWelcome, {username}!")
        print("1. Option 1")
        print("2. Option 2")
        print("3. Option 3")
        print("4. Option 4")
        print("5. Option 5")
        print("6. Log Out")
        choice = input("Please enter your choice (1-6): ")

        if choice in ['1', '2', '3', '4', '5']:
            print(f"Selected Option {choice} - Placeholder action")
        elif choice == '6':
            print("Logging out...")
            break
        else:
            print("Invalid choice. Please try again.")

# Run the homepage
display_homepage()
