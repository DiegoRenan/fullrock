require 'test_helper'

class MemberTest < ActiveSupport::TestCase
  def setup
    @member = Member.new(name: "member de test", email: "member@email.com", role: "employee")
  end

  test "should be valid" do
    assert @member.valid?
  end

  test "name should be present" do
    @member.name = "     "
    assert_not @member.valid?
  end

  test "email should be present" do
    @member.email = "     "
    assert_not @member.valid?
  end

  test "role should be present" do
    @member.role = "     "
    assert_not @member.valid?
  end

  test "name should not be too long" do
    @member.name = "a" * 201
    assert_not @member.valid?
  end

  test "email should not be too long" do
    @member.email = "a" * 201 + "@example.com"
    assert_not @member.valid?
  end

  test "role should not be too long" do
    @member.email = "a" * 21
    assert_not @member.valid?
  end

  test "email validation should accept valid addresses" do
    valid_addresses = %w[member@example.com MEMBER@foo.COM A_MEMB-ER@foo.bar.org
                       first.last@foo.jp alice+bob@baz.cn]
    valid_addresses.each do |valid_address|
        @member.email = valid_address
        assert @member.valid?, "#{valid_address.inspect} should be valid"
    end
  end

  test "email addresses should be unique" do
    duplicate_member = @member.dup
    duplicate_member.email = @member.email.upcase
    @member.save
    assert_not duplicate_member.valid?
  end

  test "email addresses should be saved as lower-case" do
    mixed_case_email = "DoO@ExAMPle.CoM"
    @member.email = mixed_case_email
    @member.save
    assert_equal mixed_case_email.downcase, @member.reload.email
  end
end
