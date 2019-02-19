class Member
  include Mongoid::Document
  include Mongoid::Timestamps
  field :name, type: String
  field :email, type: String
  field :role, type: String

  before_save { self.email = email.downcase }

  validates :name, presence: true, length: { maximum: 200 }
  validates :role, presence: true, length: { maximum: 200 }

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 200 },
                    format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }
end
