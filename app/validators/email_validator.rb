class EmailValidator < ActiveModel::EachValidator
  VALID_FORMAT = /([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/i.freeze

  def validate_each(record, attribute, value)
    return if options[:allow_blank] && value.blank?
    return if value&.match?((options[:format] || VALID_FORMAT))

    record.errors.add(attribute, (options[:message] || 'is invalid'))
  end
end
